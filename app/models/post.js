import Model, { attr} from '@ember-data/model';

export default class PostInfoModel extends Model {
    @attr userId;
    @attr id;
    @attr title;
    @attr body;
}
