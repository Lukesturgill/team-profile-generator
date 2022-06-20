const Manager = require ('../lib/manager');

test('creates manager object', () => {
    const manager = new Manager('name', 'id', 'email', 'office');

    expect(manager.name).toBe('name');
    expect(manager.id).toBe('id');
    expect(manager.email).toBe('email');
    expect(manager.office).toBe('office')
});