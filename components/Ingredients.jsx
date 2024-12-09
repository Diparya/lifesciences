export default function Ingredients() {
    const ingredients = [
      {
        title: "Vitamin C",
        description: "Vitamin C as ascorbic acid",
        image: "images/VitaminC.png",
      },
      {
        title: "Vitamin B3",
        description: "Niacin for healthy gut and skin",
        image: "images/VitaminB3.png",
      },
      {
        title: "Magnesium",
        description: "Boost energy and support muscle function",
        image: "images/Magnesium.png",
      },
      {
        title: "Hyaluronic Acid",
        description: "For smooth, supple and soft skin!",
        image: "images/HyaluronicAcid.png",
      },
      {
        title: "Lactobacillus",
        description: "Invigorate your gut microbiome",
        image: "images/Lactobacillus.png",
      },
    ];
  
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-[#17414F]">Better Ingredients</h2>
          <p className="text-center text-gray-600 mb-12">
            Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-3xl shadow hover:shadow-xl transition"
              >
                <img
                  src={ingredient.image}
                  alt={ingredient.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  