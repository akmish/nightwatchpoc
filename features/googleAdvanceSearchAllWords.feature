Feature: Google Search

Scenario: Searching Google

  Given I open Google's search page
  Then the title is "Google Advanced Search"
  And the Google search form exists
  And add "Bill Gates" in searchbox
  And add "Thai" in languageTestBox
  And add "Week" in lastUpdateTestBox
  And click on search button