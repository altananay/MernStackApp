import React from "react";
import {
  Container,
  Card,
  Icon,
  Grid,
  GridRow,
  GridColumn,
  Divider,
  Image,
} from "semantic-ui-react";

export default function Hakkimizda() {
  return (
    <div>
      <Container textAlign="justified">
        <b>Justified</b>
        <Divider />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>

        {/* large screen*/}
        <Grid stackable columns={4}>
          <GridRow only="tablet">
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Altan ANAY</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="js square" color="yellow" size="large" />
                  <Icon name="react" color="blue" size="large" />
                  <Icon name="node" color="green" size="large" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Okan AVCI</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="database" color="red" size="large" />
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Cumhur ATAK</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="microsoft" size="large" color="green" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Suat DİRAV</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="microsoft" size="large" color="green" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
          <GridRow only="tablet">
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Berkay ALİŞAN</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Yusuf KEÇER</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Ayşe BAYAM</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="js square" color="yellow" size="large" />
                  <Icon name="file excel" size="large" color="green" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header><h4>Gamze AKMEŞE</h4></Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
        </Grid>
        {/* mobile */}
        <Grid columns={2}>
          <GridRow only="mobile">
            <GridColumn>
              <Card style={{marginBottom: "20px"}}>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Altan ANAY</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="js square" color="yellow" size="large" />
                  <Icon name="react" color="blue" size="large" />
                  <Icon name="node" color="green" size="large" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Okan AVCI</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="database" color="red" size="large" />
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Cumhur ATAK</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="microsoft" size="large" color="green" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Suat DİRAV</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="microsoft" size="large" color="green" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
          <GridRow only="mobile">
            <GridColumn>
              <Card style={{marginBottom: "20px"}}>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Berkay ALİŞAN</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Yusuf KEÇER</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Ayşe BAYAM</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="js square" color="yellow" size="large" />
                  <Icon name="file excel" size="large" color="green" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header><h4>Gamze AKMEŞE</h4></Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
        </Grid>
      
        {/* large screen */}
        <Grid stackable columns={4}>
          <GridRow only="large screen">
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Altan ANAY</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="js square" color="yellow" size="large" />
                  <Icon name="react" color="blue" size="large" />
                  <Icon name="node" color="green" size="large" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Okan AVCI</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="database" color="red" size="large" />
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Cumhur Utku ATAK</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="microsoft" size="large" color="green" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Ahmet Suat DİRAV</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="microsoft" size="large" color="green" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
          <GridRow only="large screen">
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Berkay ALİŞAN</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Yusuf KEÇER</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                  <Icon name="database" color="red" size="large" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Ayşe BAYAM</Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="js square" color="yellow" size="large" />
                  <Icon name="file excel" size="large" color="green" />
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Card>
                <Image wrapped ui={false} />
                <Card.Content>
                  <Card.Header><h4>Gamze Nur AKMEŞE</h4></Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="mobile" size="large" color="blue" />
                </Card.Content>
              </Card>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </div>
  );
}
