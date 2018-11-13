export const selectSubscriptionsState = state =>
  state.katello.subscriptions;

export const selectManifestModalOpened = state =>
  selectSubscriptionsState(state).manifestModalOpened;

export const selectDeleteModalOpened = state =>
  selectSubscriptionsState(state).deleteModalOpened;

export const selectSubscriptionsTasks = state =>
  selectSubscriptionsState(state).tasks;