import { Produto } from './produto.entity';

describe('Produto', () => {
  it('should be defined', () => {
    expect(new Produto()).toBeDefined();
  });
});
