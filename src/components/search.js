import React from 'react';
import { Input } from 'semantic-ui-react';


const Search = () => (
  <Input  style={{width:"100%"}} icon={{ name: 'search', circular: true, link: true }} placeholder='Rechercher' />
)

export default Search;