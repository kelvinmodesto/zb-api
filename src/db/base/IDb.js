import NotImplementedException from '../../utils/exception/NotImplementedException';

export default class IDb {
  create(item){
    return new NotImplementedException();
  }

  read(item){
    return new NotImplementedException();
  }

  update(id, item){
    return new NotImplementedException();
  }

  delete(id){
    return new NotImplementedException();
  }

  isConnected(){
    return new NotImplementedException();
  }
}
