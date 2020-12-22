import { WaitingPipe } from './waiting.pipe';

describe('WaitingPipe', () => {
  it('create an instance', () => {
    const pipe = new WaitingPipe();
    expect(pipe).toBeTruthy();
  });
});
