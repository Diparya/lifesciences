export default function News() {
    const newsArticles = [
      {
        title: "The Covid-19 Epidemic in 2022 Is Back",
        date: "20 APR",
        image: "images/jelly.png",
      },
      {
        title: "The Covid-19 Epidemic in 2023 Is Back",
        date: "20 APR",
        image: "images/tablets.png",
      },
      {
        title: "The Covid-19 Epidemic in 2023 Is Back",
        date: "17 MAR",
        image: "images/jelly.png",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#17414F]">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsArticles.map((article, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  {article.date}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-[#17414F]">{article.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  