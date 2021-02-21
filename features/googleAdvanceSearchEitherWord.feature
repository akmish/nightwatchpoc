Feature: Google Search

Scenario: Searching Google

  Given Is open Google's search page
  Then thes title is "Google Advanced Search"
  And thes Google search form exists
  And adds "Bill Gates" in searchbox
  And adds "Thai" in languageTestBox
  And adds "Week" in lastUpdateTestBox
  And clicks on search button