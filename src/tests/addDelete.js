import StorageMock from './__mocks__/storageMock.js';

const localStorage = new StorageMock();

export const addtask = (task) => {
  const arr = JSON.parse(localStorage.getItem('list') || '[]');
  document.body.innerHTML = '<div class="listItem"></div>';
  const newArray = arr.concat(task);
  localStorage.setItem('list', JSON.stringify(newArray));
};

export const removeTask = (index) => {
  const arr = JSON.parse(localStorage.getItem('list') || '[]');
  document.body.innerHTML = '';
  const beforRemovedItem = arr.slice(0, index);
  const afterRemovedItem = arr.slice(+index + 1, arr.length + 1);
  const arrayWithRemovedTask = beforRemovedItem.concat(afterRemovedItem);
  arrayWithRemovedTask.forEach((item, index) => {
    item.index = index + 1;
  });
  localStorage.setItem('list', JSON.stringify(arrayWithRemovedTask));
};