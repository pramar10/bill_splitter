import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
import "./style.css";
import { useDispatch } from "react-redux";
import { deleteMember } from "../redux/member";
import Delete from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const PersonCard = ({ id, name, email, phone, eachAmount, paid }) => {
  const dispatch = useDispatch();
  let netAmount = eachAmount - paid;
  if (netAmount <= 0) {
    netAmount = -1 * netAmount;
  }

  const deletePerson = () => {
    dispatch(deleteMember(id));

    alert(
      "After removing person do split the bill again to get new each amount"
    );
  };
  console.log(typeof paid);
  return (
    <Container className="animate-card">
      <Action>
        <EditIcon className="action-2" />
        <Delete onClick={deletePerson} className="action-1" />
      </Action>
      <Label>{name}</Label>
      <Detail>{email}</Detail>
      <Detail>{phone}</Detail>
      <Detail>Paid : ₹{paid ?? 0}</Detail>
      {paid < eachAmount && eachAmount && (
        <NeedPay>Need to pay : ₹{netAmount}</NeedPay>
      )}
      {paid > eachAmount && eachAmount && (
        <WillReceive>Will receive : ₹{netAmount}</WillReceive>
      )}
    </Container>
  );
};
const slideIn = keyframes`${slideInLeft}`;

const Container = styled.div`
  box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  background-color: #4dabf7;
  display: inline-block;
  padding: 10px;
  position: relative;
  animation: 1s ${slideIn};
  align-self: center;
`;

const Label = styled.p`
  background-color: #4dabf7;
  font-size: 18px;
  font-weight: 600;
`;

const NeedPay = styled.p`
  background-color: #4dabf7;
  font-size: 14px;
  color: #c92a2a;
  font-weight: 600;
`;
const WillReceive = styled.p`
  background-color: #4dabf7;
  font-size: 14px;
  color: #087f5b;
  font-weight: 600;
`;
const Detail = styled.p`
  background-color: #4dabf7;
  font-size: 14px;
`;

const Action = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #4dabf7;
  display: flex;
`;

export default PersonCard;
