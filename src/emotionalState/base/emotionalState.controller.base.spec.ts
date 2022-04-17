import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { EmotionalStateController } from "../emotionalState.controller";
import { EmotionalStateService } from "../emotionalState.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  anxiety: "exampleAnxiety",
  coping: "exampleCoping",
  createdAt: new Date(),
  feeling: "exampleFeeling",
  harm: "exampleHarm",
  id: "exampleId",
  medication: "exampleMedication",
  productivity: "exampleProductivity",
  sleep: "exampleSleep",
  stress: "exampleStress",
  suicide: "exampleSuicide",
  updatedAt: new Date(),
  upTo: "exampleUpTo",
};
const CREATE_RESULT = {
  anxiety: "exampleAnxiety",
  coping: "exampleCoping",
  createdAt: new Date(),
  feeling: "exampleFeeling",
  harm: "exampleHarm",
  id: "exampleId",
  medication: "exampleMedication",
  productivity: "exampleProductivity",
  sleep: "exampleSleep",
  stress: "exampleStress",
  suicide: "exampleSuicide",
  updatedAt: new Date(),
  upTo: "exampleUpTo",
};
const FIND_MANY_RESULT = [
  {
    anxiety: "exampleAnxiety",
    coping: "exampleCoping",
    createdAt: new Date(),
    feeling: "exampleFeeling",
    harm: "exampleHarm",
    id: "exampleId",
    medication: "exampleMedication",
    productivity: "exampleProductivity",
    sleep: "exampleSleep",
    stress: "exampleStress",
    suicide: "exampleSuicide",
    updatedAt: new Date(),
    upTo: "exampleUpTo",
  },
];
const FIND_ONE_RESULT = {
  anxiety: "exampleAnxiety",
  coping: "exampleCoping",
  createdAt: new Date(),
  feeling: "exampleFeeling",
  harm: "exampleHarm",
  id: "exampleId",
  medication: "exampleMedication",
  productivity: "exampleProductivity",
  sleep: "exampleSleep",
  stress: "exampleStress",
  suicide: "exampleSuicide",
  updatedAt: new Date(),
  upTo: "exampleUpTo",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("EmotionalState", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmotionalStateService,
          useValue: service,
        },
      ],
      controllers: [EmotionalStateController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /emotionalStates", async () => {
    await request(app.getHttpServer())
      .post("/emotionalStates")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /emotionalStates", async () => {
    await request(app.getHttpServer())
      .get("/emotionalStates")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /emotionalStates/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/emotionalStates"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /emotionalStates/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/emotionalStates"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
