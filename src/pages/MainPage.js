import { Helmet } from 'react-helmet-async';
import { Grid, Container, Typography, Link, Chip } from '@mui/material';
import vendors from '../vendors/vendors.json';
import { VendorsList } from '../sections/@dashboard/app';

export default function MainPage() {
  const categories = vendors.reduce((categories, vendor) => {
    if (!categories.includes(vendor.category)) {
      categories.push(vendor.category);
    }
    return categories;
  }, []);

  categories.sort((a, b) => {
    if (a.categoryType > b.categoryType) {
      return -1;
    }
    if (a.categoryType < b.categoryType) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <Helmet>
        <title> SaaS Components </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Application level components of building a modern SaaS product. Those components, for example, include
          authentication, billing, communications, and many more. The solutions can be open-source, SaaS, frameworks,
          etc.
        </Typography>

        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid key={category} item xs={12} md={12} lg={12}>
              <VendorsList
                title={
                  <div>
                    {category}{' '}
                    <Chip
                      variant="outlined"
                      label={vendors.filter((vendor) => vendor.category === category)[0].categoryType}
                      size="small"
                    />
                  </div>
                }
                list={vendors.filter((vendor) => vendor.category === category)}
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" sx={{ mb: 5, textAlign: 'center', marginTop: 10 }}>
          Built with {'<3'} by{' '}
          <Link href="https://www.linkedin.com/in/ran-ribenzaft/" underline="always" target="_blank" rel="noopener">
            Ran Ribenzaft
          </Link>{' '}
          and{' '}
          <Link href="https://www.linkedin.com/in/tomerbarnea/" underline="always" target="_blank" rel="noopener">
            Tomer Barnea
          </Link>
          .
        </Typography>
      </Container>
    </>
  );
}
