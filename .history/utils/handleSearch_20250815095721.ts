// 
// for press enter to search
function handleSearch(searchDialog, locale, searchText, router) {
  searchDialog.value = false;
  const path =
    locale.value === "en"
      ? `/en/explore?search=${encodeURIComponent(searchText.value)}`
      : `/explore?search=${encodeURIComponent(searchText.value)}`;
  router.push(path);
  searchText.value = ""; // Clear the input field after search
}