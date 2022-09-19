import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  Pagination,
  IconButton,
} from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Visibility } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import Page from '../../components/Page';
import Scrollbar from '../../components/Scrollbar';
import { UserListHead } from '../../sections/@dashboard/user';
import USERLIST from '../../_mock/user';
import TreeData from '../../components/JsonFiles/TreeData.json';
import WardDialog from '../../components/DialogBox/WardDialog';
import { GetNoTreeProperty, SearchNoTreeProperty } from '../../actions/NoTreePropertyAction';
import { GetActiveCouncil } from '../../actions/CouncilAction';
import { GetZonesByCouncilId } from '../../actions/ZonesAction';
import { GetWardsByCouncilId } from '../../actions/WardsActions';
import ViewImageDialog from '../../components/DialogBox/tree-data/ViewImageDialog';
import TeamListToolbar from '../../sections/@dashboard/teams/TeamListToolbar';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'srno', label: '#', alignRight: false },
  { id: 'Ward', label: 'Ward', alignRight: false },
  { id: 'Counts', label: 'Counts', alignRight: false },
];

// ----------------------------------------------------------------------

export default function ByWardReports(props) {
  const { data } = props;

  console.log('data...', data);

  return (
    <Page title="User">
      <Container>
        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead headLabel={TABLE_HEAD} />
                <TableBody>
                  {data?.map((option, index) => {
                    return (
                      <TableRow hover>
                        <TableCell align="left">{index + 1}</TableCell>
                        <TableCell align="left">{option.name}</TableCell>
                        <TableCell align="left">{option.census_trees_count}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </Page>
  );
}