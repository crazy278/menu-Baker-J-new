import type { MenuItem } from '../types/menu';
import React from 'react';

type MenuItemDialogProps = {
  isOpen: boolean;
  item: MenuItem | null;
  onClose: () => void;
};

const MenuItemDialog: React.FC<MenuItemDialogProps> = ({ isOpen, item, onClose }) => {
  // إذا الديالوج مسكّر أو ما في item، ما منعرض شي
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 w-full max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold mb-2 text-yellow-400" style={{ direction: 'rtl' }}>
          {item.name}
        </h2>
        <p className="text-neutral-300 mb-4" style={{ direction: 'rtl' }}>
          السعر: {item.price}
        </p>

        <button
          onClick={onClose}
          className="mt-2 w-full rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 transition"
        >
          إغلاق
        </button>
      </div>
    </div>
  );
};

export default MenuItemDialog;