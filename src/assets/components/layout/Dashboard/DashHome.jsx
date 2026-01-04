import { useEffect, useState, use } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { AuthContext } from "../../Contexts/AuthContext";

const COLORS = [
  "#ec4899",
  "#22c55e",
  "#f97316",
  "#3b82f6",
  "#a855f7",
  "#14b8a6",
  "#f59e0b",
];

const DashHome = () => {
  const { user } = use(AuthContext);

  const [allBooks, setAllBooks] = useState([]);
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    axios.get("https://assignment-10-serverside-gyny.onrender.com/books").then((res) => {
      setAllBooks(res.data);
    });

    if (user?.email) {
      axios
        .get(`https://assignment-10-serverside-gyny.onrender.com/my-books/${user.email}`)
        .then((res) => setMyBooks(res.data));
    }
  }, [user]);

  const createRatingBuckets = (books) => {
    const buckets = {
      "5 Star": 0,
      "4.5 Star": 0,
      "4 Star": 0,
      "3.5 Star": 0,
      "Below 3.5": 0,
    };

    books.forEach((book) => {
      const rating = Number(book.rating);
      if (rating >= 5) buckets["5 Star"]++;
      else if (rating >= 4.5) buckets["4.5 Star"]++;
      else if (rating >= 4) buckets["4 Star"]++;
      else if (rating >= 3.5) buckets["3.5 Star"]++;
      else buckets["Below 3.5"]++;
    });

    return Object.entries(buckets).map(([rating, count]) => ({
      rating,
      count,
    }));
  };

  const createGenreData = (books) =>
    Object.values(
      books.reduce((acc, book) => {
        acc[book.genre] = acc[book.genre] || {
          name: book.genre,
          value: 0,
        };
        acc[book.genre].value += 1;
        return acc;
      }, {})
    );

  const allBooksBar = createRatingBuckets(allBooks);
  const myBooksBar = createRatingBuckets(myBooks);

  const allBooksPie = createGenreData(allBooks);
  const myBooksPie = createGenreData(myBooks);

  const avgMyRating =
    myBooks.reduce((a, b) => a + Number(b.rating || 0), 0) /
    (myBooks.length || 1);

  return (
    <div className="space-y-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Books (Website)</p>
          <h3 className="text-2xl font-bold text-secondary">
            {allBooks.length}
          </h3>
        </div>

        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow">
          <p className="text-sm text-gray-500">Your Books</p>
          <h3 className="text-2xl font-bold text-pink-500">
            {myBooks.length}
          </h3>
        </div>

        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow">
          <p className="text-sm text-gray-500">Your Avg Rating</p>
          <h3 className="text-2xl font-bold text-yellow-500">
            {avgMyRating.toFixed(1)}
          </h3>
        </div>
      </div>

      <section>
        <h3 className="text-lg font-semibold mb-4">
          Website Analytics
        </h3>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow">
            <h4 className="font-medium mb-3">
              All Books Rating Distribution
            </h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={allBooksBar}>
                  <XAxis dataKey="rating" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#ec4899" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow">
            <h4 className="font-medium mb-3">
              All Books by Genre
            </h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allBooksPie}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={95}
                    label
                  >
                    {allBooksPie.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-lg font-semibold mb-4">
          Your Book Analytics
        </h3>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow">
            <h4 className="font-medium mb-3">
              Your Books Rating Distribution
            </h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={myBooksBar}>
                  <XAxis dataKey="rating" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#22c55e" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow">
            <h4 className="font-medium mb-3">
              Your Books by Genre
            </h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={myBooksPie}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={95}
                    label
                  >
                    {myBooksPie.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
        <h4 className="font-semibold mb-3">
          Recently Added by You
        </h4>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {myBooks.slice(0, 3).map((b) => (
                <tr key={b._id}>
                  <td>{b.title}</td>
                  <td>{b.genre}</td>
                  <td className="text-yellow-500 font-bold">{b.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
