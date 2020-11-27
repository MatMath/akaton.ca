// Saves options to chrome.storage.sync.
function saveOptions() {
  const colorEl = document.getElementById('color');
  const color = 'blue' ; //colorEl.options[colorEl.selectedIndex].value;
  const likesColor = document.getElementById('like').setAttribute('checked', 'checked');
  chrome.storage.sync.set({
    favoriteColor: color,
    likesColor,
  }, () => {
    // Update status to let user know options were saved.
    const status = document.getElementById('status');
    status.innerText = 'Options saved.';
    setTimeout(() => {
      status.innerText = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    favoriteColor: 'red',
    likesColor: true,
  }, (items: {favoriteColor, likesColor}) => {
    // document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').setAttribute('checked', items.likesColor);
  });
}

document.getElementById('save').onclick = saveOptions;
document.addEventListener('DOMContentLoaded', restoreOptions);
