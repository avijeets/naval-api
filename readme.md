# Naval API
  
  I decided to write a quick API that outputs quotes from AngelList founder [Naval Ravikant's Twitter profile](https://twitter.com/naval/) filled with wisdom and great advice. [Naval's thread](https://twitter.com/naval/status/1002103360646823936) about "getting rich (without getting lucky)" has been referenced countless times and has been a hit on Twitter.
  
  ### Usage
  
  The main two endpoints with this API as of right now are to return all quotes and to return a random quote.
  
  All quotes:
  ```
  /all/
  ```
  
  Random quote:
  ```
  /random/
  ```

  Specific quote, by id number:
  ```
  /7/
  ```
  
  ### Try
  
  Clone the API:
  ``` 
  git clone https://github.com/avijeets/naval-api
  ```
  
  Then, go into the project directory and install its dependencies:
  ``` 
  npm install 
  ```
  
  You're done! Now, run the API:
  ```
  npm start 
  ``` 
  
 ### TODO:
 
 * Return a specified amount of quotes
 * Search for quotes with query string
 * ~~Accomodation for different threads~~
 * ~~Get tweet by ID number~~