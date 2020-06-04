import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostInfoComponent extends Component {
    @tracked showComments = false;
    @tracked commentsText = 'Show';
    @action
    show() {
        this.showComments = !this.showComments;
        this.commentsText = (this.commentsText === 'Show')? 'Hide' : 'Show';
    }
}
