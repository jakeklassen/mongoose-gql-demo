import { UserModelTC } from '../models/user';

const UserQuery = {
  userById: UserModelTC.getResolver('findById'),
  userByIds: UserModelTC.getResolver('findByIds'),
  userOne: UserModelTC.getResolver('findOne'),
  userMany: UserModelTC.getResolver('findMany'),
  userCount: UserModelTC.getResolver('count'),
  userConnection: UserModelTC.getResolver('connection'),
  userPagination: UserModelTC.getResolver('pagination'),
};

const UserMutation = {
  userCreateOne: UserModelTC.getResolver('createOne'),
  userCreateMany: UserModelTC.getResolver('createMany'),
  userUpdateById: UserModelTC.getResolver('updateById'),
  userUpdateOne: UserModelTC.getResolver('updateOne'),
  userUpdateMany: UserModelTC.getResolver('updateMany'),
  userRemoveById: UserModelTC.getResolver('removeById'),
  userRemoveOne: UserModelTC.getResolver('removeOne'),
  userRemoveMany: UserModelTC.getResolver('removeMany'),
};

export { UserQuery, UserMutation };
