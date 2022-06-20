const Engineer = require ('../lib/engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('name', 'id', 'email', 'GitHub');

    expect(engineer.name).toBe('name');
    expect(engineer.id).toBe('id');
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('GitHub')
});