interface DetailsProps {
  params: { slug: string; }
}

export default async function Details({ params }: DetailsProps) {
  try {
    const response = await fetch(`https://cdn-dev.preoday.com/challenge/venue/${params.slug}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    console.log(data);

    return (
      <div className="flex font-sans bg-gray-100">
        <div className="mx-auto bg-white overflow-hidden shadow-lg">
          <img src={data.webSettings.bannerImage} alt="Banner" className="w-full h-auto flex-[0.4]" />
          <div className="p-5 flex-[0.6]">
            <h1 className="text-2xl font-bold mb-3">{data.name}</h1>
            <p className="text-gray-700 mb-5">100g pressed hamburger, mozzarella cheese, pickles, red onion, grilled bacon and traditional Heinz mayonnaise.</p>
            <div>
              <h3 className="text-lg font-semibold mb-2">Choose your size</h3>
              <p className="text-gray-600 mb-3">Select 1 option</p>
              <div className="flex flex-col gap-3">
                <label className="flex items-center">
                  <input type="radio" name="size" value="1 meat" className="mr-2" />
                  1 meat - {data.ccySymbol}33,00
                </label>
                <label className="flex items-center">
                  <input type="radio" name="size" value="2 meats" className="mr-2" />
                  2 meats - {data.ccySymbol}35,00
                </label>
                <label className="flex items-center">
                  <input type="radio" name="size" value="3 meats" className="mr-2" />
                  3 meats - {data.ccySymbol}37,00
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center">
                <button className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full">-</button>
                <span className="mx-3">1</span>
                <button className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full">+</button>
              </div>
              <button className="bg-red-600 text-white font-bold py-2 px-6 rounded hover:bg-red-700">
                Add to Order • {data.ccySymbol}11.75
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <h1>Error</h1>
        <p>There was an error fetching the details.</p>
      </div>
    );
  }
}