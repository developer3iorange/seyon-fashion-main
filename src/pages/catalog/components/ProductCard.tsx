import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../../mocks/products';

interface ProductCardProps {
  product: Product;
  showGenderBadge?: boolean;
  onImageClick?: () => void;
}

const ProductCard = ({ product, showGenderBadge = true, onImageClick }: ProductCardProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
      style={{ border: '1px solid var(--c-border)', background: 'var(--c-bg-card)' }}
    >
      <div
        className="relative overflow-hidden cursor-pointer"
        style={{ height: '260px', background: '#F5F5F5' }}
        onClick={() => onImageClick?.()}
      >
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <i className="ri-t-shirt-line text-4xl" style={{ color: 'var(--c-text-faint)' }} />
          </div>
        )}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 60%)' }}
        >
          <Link
            to="/contact"
            className="w-full btn-gold text-[12px] justify-center pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            Request This Style <i className="ri-arrow-right-up-line" />
          </Link>
        </div>
        {showGenderBadge && (
          <div className="absolute top-3 left-3">
            <span
              className="text-[10px] tracking-wider uppercase px-3 py-1 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.90)',
                color: '#111111',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                border: '1px solid rgba(0,0,0,0.10)',
                backdropFilter: 'blur(4px)',
              }}
            >
              {product.subCategory ?? product.gender}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 p-5 flex-1">
        <h3
          className="font-semibold text-[15px] leading-snug"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--c-text)' }}
        >
          {product.name}
        </h3>
        <p className="text-[13px]" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          {product.fabric}
        </p>
        {product.note && (
          <p
            className="text-[11px] italic"
            style={{ color: '#111111', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            ✦ {product.note}
          </p>
        )}
        <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: '1px solid var(--c-border-subtle)' }}>
          <span className="text-[12px]" style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            MOQ: <span style={{ color: 'var(--c-text-sec)' }}>{product.moq}</span>
          </span>
          <Link
            to="/contact"
            className="text-[11px] tracking-wider uppercase font-medium transition-colors duration-200 hover:text-[#111111] whitespace-nowrap"
            style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            RFQ →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
