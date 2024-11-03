import React from 'react';

const ImageComponent = ({ src, alt, caption, source }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
      marginBottom: '20px',
    }}>
      <img 
        src={src} 
        alt={alt} 
        style={{
          width: '100%',
          maxWidth: '800px',
          height: 'auto',
          borderRadius: '4px',
        }}
      />
      
      {/* Caption and Source */}
      {(caption || source) && (
        <div style={{
          marginTop: '8px',
          textAlign: 'center',
          color: '#555',
          fontSize: '0.9rem',
        }}>
          {caption && <p style={{ margin: '4px 0', fontStyle: 'italic' }}>{caption}</p>}
          {source && <p style={{ margin: '4px 0', fontSize: '0.8rem', fontStyle: 'italic' }}>Source: {source}</p>}
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
