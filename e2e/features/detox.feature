@TagDetox
Feature: Feature Detox Test

   Scenario: Detox Test Example 1
      Given I should have welcome screen
      When I should count to "1" if pressed once
      Then I should wtrite "Hello Wold" into TextInput
         And I should scroll the name by
         And I should scroll till list end
         And I should swipe scroll

   Scenario: Detox Test Example 2
      When I write "Hello Worl" in the input text
      Then I should the result "Hello Worl" in the input text

   Scenario Outline: Detox Test Example 3
      When I write "<TextInput>" in the input text
      Then I should the result "<TextResult>" in the input text

      Examples:
         | TextInput | TextResult |
         | Felipe    | Felipe     |
         | Juan      | Pedro      |
