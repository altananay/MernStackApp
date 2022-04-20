import React from "react";
import { Container, Grid, List, Header } from "semantic-ui-react";

export default function Footer() {
  return (
    <div>
          <Container>
            <Grid divided stackable >
              <Grid.Row style={{marginLeft:"20px"}}>
                <Grid.Column width={3}>
                  <Header as="h4" content="About" />
                  <List link>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Religious Ceremonies</List.Item>
                    <List.Item as="a">Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header as="h4" content="About" />
                  <List link>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Religious Ceremonies</List.Item>
                    <List.Item as="a">Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4">Telif Hakkı</Header>
                  <p>
                    Puip ekibi tarafından tasarlandı ve kodlandı. - Tüm hakları
                    saklıdır.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
    </div>
  );
}
