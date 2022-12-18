import PropTypes from 'prop-types';
import { Box, Card, Paper, CardHeader, CardContent, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import { logos } from '../../../vendors';

VendorsList.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function VendorsList({ title, subheader, list }) {
  const handleClick = (url) => {
    window.open(`${url}?ref=saascomponentsio`, '_blank');
  };
  return (
    <Card>
      <CardHeader title={title} subheader={subheader} />

      <CardContent>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: 'repeat(6, 1fr)',
          }}
        >
          {list.map((vendor) => (
            <Paper
              key={vendor.name}
              variant="outlined"
              sx={{ py: 2.5, textAlign: 'center', '&:hover': { borderColor: '#1F71BC', cursor: 'pointer' } }}
              onClick={() => handleClick(vendor.url)}
            >
              <img src={logos[vendor.name.toLowerCase()]} alt={vendor.name} width={100} style={{ margin: 'auto' }} />

              {vendor.opensource && (
                <Chip
                  icon={<CodeIcon />}
                  color="primary"
                  variant="outlined"
                  label="Open-Source"
                  size="small"
                  sx={{ marginTop: '30px' }}
                />
              )}
            </Paper>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
