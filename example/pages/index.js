import { usePlaceCage } from '../../';

export default function Index() {
  const nickSingle = usePlaceCage(400, 300);

  const nickClones = usePlaceCage({
    width: 300,
    height: 300,
    count: 5
  });

  const nickFriends = usePlaceCage([
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
  ]);

  return (
    <div className="cage">
      <style jsx>{`
        img {
          max-width: 100%;
        }

        pre {
          overflow: auto;
          max-height: 15em;
          background-color: #eeeeee;
          padding: 1em;
        }

        .cage {
          font-family: sans-serif;
        }

        .cage ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 1em 0;
        }
      `}</style>
      <h1>usePlaceCage</h1>

      <p>
        React hook for generating a many wonderful instance of Nicolas Cage
        via <a href="https://www.placecage.com/">placecage.com</a>
      </p>

      <h2>Examples</h2>

      <h3>Single Nick</h3>
      <pre>
        <code>
{`const nickSingle = usePlaceCage(400, 300);`}
        </code>
      </pre>
      <ul>
        <li>
          <img width="400" height="300" src={nickSingle} loading="lazy" alt="It is Nic!" />
        </li>
      </ul>

      <h3>Nick with his clones</h3>
      <pre>
        <code>
{`const nickClones = usePlaceCage({
  width: 300,
  height: 300,
  count: 5
});`}
        </code>
      </pre>
      <ul>
        { nickClones.map((c, i) => {
          return (
            <li key={`nickFriends-${i}`}>
              <img width="300" height="300" src={c} loading="lazy" alt="It is Nic!" />
            </li>
          )
        })}
      </ul>

      <h3>Nick with friends</h3>
      <pre>
        <code>
{`const nickFriends = usePlaceCage([
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
]);`}
        </code>
      </pre>
      <ul>
        { nickFriends.map((friends, friendsIndex) => {
          return friends.map((friend, friendIndex) => {
            return (
              <li key={`nickFriends${friendsIndex}-${friendIndex}`}>
                <img width="300" height="300" src={friend} loading="lazy" alt="It is Nic!" />
              </li>
            )
          });
        })}
      </ul>
    </div>
  );

}