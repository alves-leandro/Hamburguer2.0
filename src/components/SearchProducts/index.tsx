import { InputBox } from "./styles";

interface iSearchProductsProps {
    search: string
    handleSearch: (element: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchProducts = ({search, handleSearch}: iSearchProductsProps) => {

  return (
    <div className="divInputSearch">
      <InputBox
        placeholder="Digitar Pesquisa"
        type="text"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};