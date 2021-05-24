import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "../components/SearchResults";

interface ResultData {
  data: any[];
  totalPrice: number;
}

export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<ResultData>({
    totalPrice: 0,
    data: []
  });

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json();

    const totalPrice = data.reduce((total, product) => {
      return total + product.price;
    }, 0)

    setResults({ totalPrice, data });
  }

  const addToWishlist = useCallback(async (id: number) => {
    console.log(id);
  }, [])

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
        />

        <button type="submit">Buscar</button>
      </form>

      <SearchResults
        totalPrice={results.totalPrice}
        results={results.data}
        onAddToWishlist={addToWishlist}
      />
    </div>
  )
}
