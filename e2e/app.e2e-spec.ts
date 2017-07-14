import { CompInteractionPage } from './app.po';

describe('comp-interaction App', () => {
  let page: CompInteractionPage;

  beforeEach(() => {
    page = new CompInteractionPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
