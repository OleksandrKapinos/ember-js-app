import Model, {attr} from '@ember-data/model';

export default class UserInfoModel extends Model {
    @attr id;
    @attr name;
    @attr username;
    @attr email;
    @attr address;
    @attr phone;
    @attr website;
    @attr company;
}
