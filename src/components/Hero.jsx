import { Dropdown, ButtonGroup, Container } from 'react-bootstrap';
import { Grid, Grid3x3 } from 'react-bootstrap-icons';

const Hero = () => {
  return (
    <Container fluid className="py-2 px-4 d-flex justify-content-between align-items-center bg-dark">
        <div className="d-flex align-items-centers">
          <h2 className=" text-light">TV Shows</h2>
          <ButtonGroup className="ms-4 text-center">
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle
                variant="secondary"
                size="sm"
                className="rounded-0 bg-dark border-0" >Genres </Dropdown.Toggle>

              <Dropdown.Menu className='bg-dark'>
                <Dropdown.Item className='text-light' href="#">Comedy</Dropdown.Item>
                <Dropdown.Item className='text-light' href="#">Drama</Dropdown.Item>
                <Dropdown.Item className='text-light' href="#">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ButtonGroup>
        </div>

        <div className="d-flex align-items-center gap-3">
          <Grid className="icons" size={18} color="white" />
          <Grid3x3 className="icons" size={18} color="white" />
        </div>
    </Container>
  );
};

export default Hero;
