import { testSelectorsSnapshotWithFixtures } from '../../../move_to_pf/test-utils/testHelpers';
import {
  selectSubscriptionsState,
  selectSearchQuery,
  selectManifestModalOpened,
  selectDeleteModalOpened,
  selectDeleteButtonDisabled,
  selectSubscriptionsTasks,
  selectTaskModalOpened,
} from '../SubscriptionsSelectors';

const state = {
  katello: {
    subscriptions: {
      searchQuery: 'some-query',
      manifestModalOpened: false,
      deleteModalOpened: false,
      taskModalOpened: false,
      deleteButtonDisabled: true,
      tasks: ['task1', 'task2'],
    },
  },
};

const fixtures = {
  'should select the subscriptions state': () => selectSubscriptionsState(state),
  'should select search-query': () => selectSearchQuery(state),
  'should select manifest-modal-opened': () => selectManifestModalOpened(state),
  'should select delete-modal-opened': () => selectDeleteModalOpened(state),
  'should select task-modal-opened': () => selectTaskModalOpened(state),
  'should select delete-button-disabled': () => selectDeleteButtonDisabled(state),
  'should select subscriptions tasks': () => selectSubscriptionsTasks(state),
};

describe('Subscriptions selectors', () => testSelectorsSnapshotWithFixtures(fixtures));
