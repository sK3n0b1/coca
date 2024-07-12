export const useTabs = () => {
  const tabsBtn = document.querySelectorAll('.hero__tabs-btn');
  const tabsItems = document.querySelectorAll('.hero__tabs-content-item');

  tabsBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active')) {
        tabsBtn.forEach(function (item) {
          item.classList.remove('active');
        });

        tabsItems.forEach(function (item) {
          item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  });

  document.querySelector('.hero__tabs-btn').click();
};


