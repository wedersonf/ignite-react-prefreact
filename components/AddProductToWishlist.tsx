export interface AddProductToWishlistProps {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishlist({
  onAddToWishlist,
  onRequestClose,
}: AddProductToWishlistProps) {
  return (
    <span>
      Deseja adicionar os favoritos?

      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Nao</button>
    </span>
  )
}