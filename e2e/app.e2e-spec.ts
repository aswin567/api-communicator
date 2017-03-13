import { APICommunicatorPage } from './app.po';

describe('apicommunicator App', () => {
  let page: APICommunicatorPage;

  beforeEach(() => {
    page = new APICommunicatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
