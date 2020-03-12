# usePlaceCage

React hook for placecage.com

## Getting Started
### Install
Add using your favorite package manager:
```
yarn add use-placecage
or
npm install use-placecage
```

### Usage
Want to add Nick?
```
const nick = usePlaceCage(400, 300);
// You got Nic
// https://www.placecage.com/400/300
```

Want to add multiple Nicks?
```
const nick = usePlaceCage({
  width: 300,
  height: 300,
  count: 5
});
// You got 5 Nics
// ["https://www.placecage.com/300/300", "https://www.placecage.com/300/300", "https://www.placecage.com/300/300", "https://www.placecage.com/300/300", "https://www.placecage.com/300/300"]
```

Want to get weird?
```
usePlaceCage([
  {
    width: 100,
    height: 200,
    count: 1
  },
  {
    width: 110,
    height: 200,
    count: 1
  },
  {
    width: 120,
    height: 200,
    count: 1
  },
  {
    width: 130,
    height: 200,
    count: 1
  },
  {
    width: 140,
    height: 200,
    count: 1
  },
  {
    width: 150,
    height: 200,
    count: 1
  }
])
// You do you, but you got Nic
// [
//   ["https://www.placecage.com/100/200"],
//   ["https://www.placecage.com/110/200"],
//   ["https://www.placecage.com/120/200"],
//   ["https://www.placecage.com/130/200"],
//   ["https://www.placecage.com/140/200"],
//   ["https://www.placecage.com/150/200"]
// ]
```

## PlaceCage
This wouldn't be a thing without https://www.placecage.com/
