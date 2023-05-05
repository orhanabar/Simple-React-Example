import "./pageStyle.css";
import { Container, Row, Col, Card } from "react-bootstrap";
const Products = () => {
  const productList = [
    {
      src: require("../assets/images/poetry/baget.jpg"),
      header: "Baget",
      fiyat: " TL"
    },
    {
      src: require("../assets/images/poetry/bonfile.jpg"),
      header: "Bonfile",
      fiyat: " TL"
    },
    {
      src: require("../assets/images/poetry/ciger.jpg"),
      header: "Ciger",
      fiyat: " TL"
    },
    {
      src: require("../assets/images/poetry/doner.jpg"),
      header: "Doner",
      fiyat: " TL"
    },
    {
      src: require("../assets/images/poetry/kanat.jpg"),
      header: "Kanat",
      fiyat: " TL"
    },
    {
      src: require("../assets/images/poetry/kelebek.jpg"),
      header: "Kelebek",
      fiyat: " TL"
    },
    {
      src: require("../assets/images/poetry/kemiksizUyluk.jpg"),
      header: "Kemiksiz Uyluk",
      fiyat: " TL"
    },
    {
      src: require("../assets/images/poetry/ortaKanat.jpg"),
      header: "Orta Kanat",
      fiyat: " TL"
    },
    {
      src: require("../assets/images/poetry/tumBut.jpg"),
      header: "Tüm But",
      fiyat: " TL"
    },
    {
      src: require("../assets/images/poetry/tumGogus.jpg"),
      header: "Tüm Göğüs",
      fiyat: " TL"
    },
    {
      src: require("../assets/images/poetry/tumTavuk.jpg"),
      header: "Tüm Tavuk",
      fiyat: " TL"
    },
    {
      src: require("../assets/images/poetry/yurek.jpg"),
      header: "Yürek",
      fiyat: " TL"
    }
  ];

  return (
    <div>
      <p>Ürünlerimizden Bazıları</p>
      <Container className="project-section">
        <Row xs={1} md={2}>
          {productList.map((product, idx) => (
            <Col>
              <Card border="secondary" text={"dark"} className="project-card">
                <Card.Img
                  className="cardImg"
                  variant="top"
                  src={product.src}
                  alt="card-img"
                />
                <Card.Body>
                  <Card.Title> {product.header} </Card.Title>
                  <Card.Text>Fiyat:{product.fiyat}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
