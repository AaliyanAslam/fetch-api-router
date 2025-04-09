import React from 'react';
import useFetch from '../hooks/useFetch';
import Variants from '../components/Loading';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Products2 = () => {
  const params = useParams();
  const [loading, error, data] = useFetch(`https://dummyjson.com/products/${params.id}`);

  if (loading) {
    return <Variants />;
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <h1 className="text-danger fw-bold fs-1">Error occurred</h1>
      </div>
    );
  }

  const originalPrice = (data.price / (1 - data.discountPercentage / 100)).toFixed(2);

  return (
    <Container className="py-4">
      <Row className="g-5">
        {/* Product Image */}
        <Col lg={6} className="d-flex justify-content-center">
          <Card className="shadow border-0" style={{ width: '18rem', height: '24rem' }}>
            <Card.Img
              variant="top"
              src={data.thumbnail}
              alt={data.title}
              style={{ objectFit: 'contain', height: '100%' }}
            />
          </Card>
        </Col>

        {/* Product Details */}
        <Col lg={6}>
          <div className="mb-3">
            <h1 className="h3 fw-semibold text-dark">{data.title}</h1>
          </div>

          {/* Price and Discount */}
          <div className="d-flex align-items-center mb-2 gap-3">
            <span className="fs-4 fw-bold text-success">${data.price}</span>
            <span className="text-danger text-decoration-line-through">${originalPrice}</span>
            <span className="text-success">-{data.discountPercentage}% Off</span>
          </div>

          {/* Rating and Reviews */}
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="text-warning fs-2">⭐⭐⭐⭐⭐</span>
            <span className="text-muted">
              {data.rating} ({data.reviews.length} Reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-muted small">{data.description}</p>

          {/* Availability */}
          <div className="text-muted small mb-3">
            <p>
              <strong>Availability:</strong> {data.availabilityStatus} ({data.stock} left)
            </p>
            <p>
              <strong>Minimum Order Quantity:</strong> 24
            </p>
          </div>

          {/* Shipping */}
          <p className="text-muted small">
            <strong>Shipping:</strong> Ships in 1 month
          </p>

          {/* Warranty */}
          <p className="text-muted small">
            <strong>Warranty:</strong> {data.warrantyInformation}
          </p>

          {/* Return Policy */}
          <p className="text-muted small">
            <strong>Return Policy:</strong> {data.returnPolicy}
          </p>

          {/* Barcode & QR Code */}
          <div className="d-flex align-items-center gap-3 my-3">
            <img
              src="https://assets.dummyjson.com/public/qr-code.png"
              alt="QR Code"
              width={80}
              height={80}
              className="border rounded"
            />
            <div className="text-muted small">
              <strong>Barcode:</strong> {data.sku}
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button variant="primary" className="w-100 py-2 fw-semibold shadow">
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Products2;
