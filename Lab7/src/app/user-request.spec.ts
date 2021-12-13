import { UserRequest } from './user-request';

describe('UserRequest', () => {
  const userData = new UserRequest();

  it('should create an instance', () => {
    expect(new UserRequest()).toBeTruthy();
  });

  it('name is accessible', () => {
    expect(userData.name).toEqual('');
    userData.name='J';
    expect(userData.name).toEqual('J');
  });

  it('sex is accessible', () => {
    expect(userData.sex).toEqual('');
    userData.sex='J';
    expect(userData.sex).toEqual('J');
  });

  it('email is accessible', () => {
    expect(userData.email).toEqual('');
    userData.email='J';
    expect(userData.email).toEqual('J');
  });

  it('animals is accessible', () => {
    expect(userData.animals).toEqual('');
    userData.animals='J';
    expect(userData.animals).toEqual('J');
  });



  it('phone is accessible', () => {
    expect(userData.phone).toEqual('');
    userData.phone='Jora';
    expect(userData.phone).toEqual('Jora');
  });

  it('msgText is accessible', () => {
    expect(userData.msgText).toEqual('');
    userData.msgText='Jora';
    expect(userData.msgText).toEqual('Jora');
  });

});
