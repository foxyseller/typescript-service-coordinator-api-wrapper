import { ParserCoordinatorApi } from '~/index.js';

import 'dotenv/config';

describe('/api/parserTasks', () => {
  let api: ParserCoordinatorApi;

  beforeAll(async () => {
    api = new ParserCoordinatorApi({
      baseUrl: process.env.API_BASE_URL!,
      apiKey: process.env.API_KEY!,
    });
  });

  describe('/take', () => {
    test('should pass test', async () => {
      const request = api.parserTask.take({
        take: 10,
        parserTaskType: 'WildberriesScraper',
        parserTaskSubType: 'GetProductCard',
      });

      const json = await request.json();

      expect(json).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            taskId: expect.any(String),
            tryId: expect.any(String),
            marketplace: expect.any(String),
            type: expect.any(String),
            subType: expect.any(String),
            tskData: expect.any(String),
          }),
        ]),
      );
    });
  });
});
