/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      role
      retailerCompanyID
      supplierCompanyID
      chatGroup {
        items {
          id
          userID
          chatGroupID
          lastOnline
          chatGroup {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          user {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      contactNumber
      retailerCompany {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierCompany {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      role
      retailerCompanyID
      supplierCompanyID
      chatGroup {
        items {
          id
          userID
          chatGroupID
          lastOnline
          chatGroup {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          user {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      contactNumber
      retailerCompany {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierCompany {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      role
      retailerCompanyID
      supplierCompanyID
      chatGroup {
        items {
          id
          userID
          chatGroupID
          lastOnline
          chatGroup {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          user {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      contactNumber
      retailerCompany {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierCompany {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRetailerCompany = /* GraphQL */ `
  mutation CreateRetailerCompany(
    $input: CreateRetailerCompanyInput!
    $condition: ModelRetailerCompanyConditionInput
  ) {
    createRetailerCompany(input: $input, condition: $condition) {
      id
      name
      employees {
        items {
          id
          name
          role
          retailerCompanyID
          supplierCompanyID
          chatGroup {
            nextToken
          }
          contactNumber
          retailerCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      address
      rating {
        numberOfRatings
        CurrentRating
      }
      registrationNumber
      favouriteStores {
        id
        name
      }
      goodsTask {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          items {
            name
            quantity
            siUnit
            variety
            grade
            price
          }
          createdAt
          deliveryDate
          updatedAt
        }
        nextToken
      }
      paymentTask {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          paid
          amount
          payBefore
          receipt
          createdAt
          invoiceID
          invoice {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          updatedAt
        }
        nextToken
      }
      invoice {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          items {
            name
            quantity
            siUnit
            variety
            grade
            price
          }
          createdAt
          paid
          receivedBy
          updatedAt
        }
        nextToken
      }
      chatGroups {
        items {
          id
          name
          retailerID
          retailerCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          supplierCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          chatParticipants {
            nextToken
          }
          messages {
            nextToken
          }
          updatedAt
          createdAt
          mostRecentMessage
          mostRecentMessageSender
        }
        nextToken
      }
      verified
      logo
      createdAt
      updatedAt
    }
  }
`;
export const updateRetailerCompany = /* GraphQL */ `
  mutation UpdateRetailerCompany(
    $input: UpdateRetailerCompanyInput!
    $condition: ModelRetailerCompanyConditionInput
  ) {
    updateRetailerCompany(input: $input, condition: $condition) {
      id
      name
      employees {
        items {
          id
          name
          role
          retailerCompanyID
          supplierCompanyID
          chatGroup {
            nextToken
          }
          contactNumber
          retailerCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      address
      rating {
        numberOfRatings
        CurrentRating
      }
      registrationNumber
      favouriteStores {
        id
        name
      }
      goodsTask {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          items {
            name
            quantity
            siUnit
            variety
            grade
            price
          }
          createdAt
          deliveryDate
          updatedAt
        }
        nextToken
      }
      paymentTask {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          paid
          amount
          payBefore
          receipt
          createdAt
          invoiceID
          invoice {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          updatedAt
        }
        nextToken
      }
      invoice {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          items {
            name
            quantity
            siUnit
            variety
            grade
            price
          }
          createdAt
          paid
          receivedBy
          updatedAt
        }
        nextToken
      }
      chatGroups {
        items {
          id
          name
          retailerID
          retailerCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          supplierCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          chatParticipants {
            nextToken
          }
          messages {
            nextToken
          }
          updatedAt
          createdAt
          mostRecentMessage
          mostRecentMessageSender
        }
        nextToken
      }
      verified
      logo
      createdAt
      updatedAt
    }
  }
`;
export const deleteRetailerCompany = /* GraphQL */ `
  mutation DeleteRetailerCompany(
    $input: DeleteRetailerCompanyInput!
    $condition: ModelRetailerCompanyConditionInput
  ) {
    deleteRetailerCompany(input: $input, condition: $condition) {
      id
      name
      employees {
        items {
          id
          name
          role
          retailerCompanyID
          supplierCompanyID
          chatGroup {
            nextToken
          }
          contactNumber
          retailerCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      address
      rating {
        numberOfRatings
        CurrentRating
      }
      registrationNumber
      favouriteStores {
        id
        name
      }
      goodsTask {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          items {
            name
            quantity
            siUnit
            variety
            grade
            price
          }
          createdAt
          deliveryDate
          updatedAt
        }
        nextToken
      }
      paymentTask {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          paid
          amount
          payBefore
          receipt
          createdAt
          invoiceID
          invoice {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          updatedAt
        }
        nextToken
      }
      invoice {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          items {
            name
            quantity
            siUnit
            variety
            grade
            price
          }
          createdAt
          paid
          receivedBy
          updatedAt
        }
        nextToken
      }
      chatGroups {
        items {
          id
          name
          retailerID
          retailerCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          supplierCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          chatParticipants {
            nextToken
          }
          messages {
            nextToken
          }
          updatedAt
          createdAt
          mostRecentMessage
          mostRecentMessageSender
        }
        nextToken
      }
      verified
      logo
      createdAt
      updatedAt
    }
  }
`;
export const createSupplierCompany = /* GraphQL */ `
  mutation CreateSupplierCompany(
    $input: CreateSupplierCompanyInput!
    $condition: ModelSupplierCompanyConditionInput
  ) {
    createSupplierCompany(input: $input, condition: $condition) {
      id
      name
      employees {
        items {
          id
          name
          role
          retailerCompanyID
          supplierCompanyID
          chatGroup {
            nextToken
          }
          contactNumber
          retailerCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      address
      rating {
        numberOfRatings
        CurrentRating
      }
      bankAccount {
        bankName
        accountNumber
      }
      registrationNumber
      listings {
        items {
          id
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          productName
          variety
          quantityAvailable
          lowPrice
          highPrice
          minimumQuantity
          productPicture
          grade
          siUnit
          createdAt
          updatedAt
        }
        nextToken
      }
      goodsTask {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          items {
            name
            quantity
            siUnit
            variety
            grade
            price
          }
          createdAt
          deliveryDate
          updatedAt
        }
        nextToken
      }
      paymentTask {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          paid
          amount
          payBefore
          receipt
          createdAt
          invoiceID
          invoice {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          updatedAt
        }
        nextToken
      }
      invoice {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          items {
            name
            quantity
            siUnit
            variety
            grade
            price
          }
          createdAt
          paid
          receivedBy
          updatedAt
        }
        nextToken
      }
      chatGroups {
        items {
          id
          name
          retailerID
          retailerCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          supplierCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          chatParticipants {
            nextToken
          }
          messages {
            nextToken
          }
          updatedAt
          createdAt
          mostRecentMessage
          mostRecentMessageSender
        }
        nextToken
      }
      verified
      logo
      createdAt
      updatedAt
    }
  }
`;
export const updateSupplierCompany = /* GraphQL */ `
  mutation UpdateSupplierCompany(
    $input: UpdateSupplierCompanyInput!
    $condition: ModelSupplierCompanyConditionInput
  ) {
    updateSupplierCompany(input: $input, condition: $condition) {
      id
      name
      employees {
        items {
          id
          name
          role
          retailerCompanyID
          supplierCompanyID
          chatGroup {
            nextToken
          }
          contactNumber
          retailerCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      address
      rating {
        numberOfRatings
        CurrentRating
      }
      bankAccount {
        bankName
        accountNumber
      }
      registrationNumber
      listings {
        items {
          id
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          productName
          variety
          quantityAvailable
          lowPrice
          highPrice
          minimumQuantity
          productPicture
          grade
          siUnit
          createdAt
          updatedAt
        }
        nextToken
      }
      goodsTask {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          items {
            name
            quantity
            siUnit
            variety
            grade
            price
          }
          createdAt
          deliveryDate
          updatedAt
        }
        nextToken
      }
      paymentTask {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          paid
          amount
          payBefore
          receipt
          createdAt
          invoiceID
          invoice {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          updatedAt
        }
        nextToken
      }
      invoice {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          items {
            name
            quantity
            siUnit
            variety
            grade
            price
          }
          createdAt
          paid
          receivedBy
          updatedAt
        }
        nextToken
      }
      chatGroups {
        items {
          id
          name
          retailerID
          retailerCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          supplierCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          chatParticipants {
            nextToken
          }
          messages {
            nextToken
          }
          updatedAt
          createdAt
          mostRecentMessage
          mostRecentMessageSender
        }
        nextToken
      }
      verified
      logo
      createdAt
      updatedAt
    }
  }
`;
export const deleteSupplierCompany = /* GraphQL */ `
  mutation DeleteSupplierCompany(
    $input: DeleteSupplierCompanyInput!
    $condition: ModelSupplierCompanyConditionInput
  ) {
    deleteSupplierCompany(input: $input, condition: $condition) {
      id
      name
      employees {
        items {
          id
          name
          role
          retailerCompanyID
          supplierCompanyID
          chatGroup {
            nextToken
          }
          contactNumber
          retailerCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      address
      rating {
        numberOfRatings
        CurrentRating
      }
      bankAccount {
        bankName
        accountNumber
      }
      registrationNumber
      listings {
        items {
          id
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          productName
          variety
          quantityAvailable
          lowPrice
          highPrice
          minimumQuantity
          productPicture
          grade
          siUnit
          createdAt
          updatedAt
        }
        nextToken
      }
      goodsTask {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          items {
            name
            quantity
            siUnit
            variety
            grade
            price
          }
          createdAt
          deliveryDate
          updatedAt
        }
        nextToken
      }
      paymentTask {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          paid
          amount
          payBefore
          receipt
          createdAt
          invoiceID
          invoice {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          updatedAt
        }
        nextToken
      }
      invoice {
        items {
          id
          retailer {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          retailerID
          supplier {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          items {
            name
            quantity
            siUnit
            variety
            grade
            price
          }
          createdAt
          paid
          receivedBy
          updatedAt
        }
        nextToken
      }
      chatGroups {
        items {
          id
          name
          retailerID
          retailerCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          supplierID
          supplierCompany {
            id
            name
            type
            address
            registrationNumber
            verified
            logo
            createdAt
            updatedAt
          }
          chatParticipants {
            nextToken
          }
          messages {
            nextToken
          }
          updatedAt
          createdAt
          mostRecentMessage
          mostRecentMessageSender
        }
        nextToken
      }
      verified
      logo
      createdAt
      updatedAt
    }
  }
`;
export const createChatGroup = /* GraphQL */ `
  mutation CreateChatGroup(
    $input: CreateChatGroupInput!
    $condition: ModelChatGroupConditionInput
  ) {
    createChatGroup(input: $input, condition: $condition) {
      id
      name
      retailerID
      retailerCompany {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      supplierCompany {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      chatParticipants {
        items {
          id
          userID
          chatGroupID
          lastOnline
          chatGroup {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          user {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          chatGroupID
          type
          content
          senderID
          sender
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
      createdAt
      mostRecentMessage
      mostRecentMessageSender
    }
  }
`;
export const updateChatGroup = /* GraphQL */ `
  mutation UpdateChatGroup(
    $input: UpdateChatGroupInput!
    $condition: ModelChatGroupConditionInput
  ) {
    updateChatGroup(input: $input, condition: $condition) {
      id
      name
      retailerID
      retailerCompany {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      supplierCompany {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      chatParticipants {
        items {
          id
          userID
          chatGroupID
          lastOnline
          chatGroup {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          user {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          chatGroupID
          type
          content
          senderID
          sender
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
      createdAt
      mostRecentMessage
      mostRecentMessageSender
    }
  }
`;
export const deleteChatGroup = /* GraphQL */ `
  mutation DeleteChatGroup(
    $input: DeleteChatGroupInput!
    $condition: ModelChatGroupConditionInput
  ) {
    deleteChatGroup(input: $input, condition: $condition) {
      id
      name
      retailerID
      retailerCompany {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      supplierCompany {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      chatParticipants {
        items {
          id
          userID
          chatGroupID
          lastOnline
          chatGroup {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          user {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          chatGroupID
          type
          content
          senderID
          sender
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
      createdAt
      mostRecentMessage
      mostRecentMessageSender
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      chatGroupID
      type
      content
      senderID
      sender
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      chatGroupID
      type
      content
      senderID
      sender
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      chatGroupID
      type
      content
      senderID
      sender
      createdAt
      updatedAt
    }
  }
`;
export const createChatGroupUsers = /* GraphQL */ `
  mutation CreateChatGroupUsers(
    $input: CreateChatGroupUsersInput!
    $condition: ModelChatGroupUsersConditionInput
  ) {
    createChatGroupUsers(input: $input, condition: $condition) {
      id
      userID
      chatGroupID
      lastOnline
      chatGroup {
        id
        name
        retailerID
        retailerCompany {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          registrationNumber
          favouriteStores {
            id
            name
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        supplierID
        supplierCompany {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          bankAccount {
            bankName
            accountNumber
          }
          registrationNumber
          listings {
            nextToken
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        chatParticipants {
          items {
            id
            userID
            chatGroupID
            lastOnline
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            chatGroupID
            type
            content
            senderID
            sender
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
        createdAt
        mostRecentMessage
        mostRecentMessageSender
      }
      user {
        id
        name
        role
        retailerCompanyID
        supplierCompanyID
        chatGroup {
          items {
            id
            userID
            chatGroupID
            lastOnline
            createdAt
            updatedAt
          }
          nextToken
        }
        contactNumber
        retailerCompany {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          registrationNumber
          favouriteStores {
            id
            name
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        supplierCompany {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          bankAccount {
            bankName
            accountNumber
          }
          registrationNumber
          listings {
            nextToken
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatGroupUsers = /* GraphQL */ `
  mutation UpdateChatGroupUsers(
    $input: UpdateChatGroupUsersInput!
    $condition: ModelChatGroupUsersConditionInput
  ) {
    updateChatGroupUsers(input: $input, condition: $condition) {
      id
      userID
      chatGroupID
      lastOnline
      chatGroup {
        id
        name
        retailerID
        retailerCompany {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          registrationNumber
          favouriteStores {
            id
            name
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        supplierID
        supplierCompany {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          bankAccount {
            bankName
            accountNumber
          }
          registrationNumber
          listings {
            nextToken
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        chatParticipants {
          items {
            id
            userID
            chatGroupID
            lastOnline
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            chatGroupID
            type
            content
            senderID
            sender
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
        createdAt
        mostRecentMessage
        mostRecentMessageSender
      }
      user {
        id
        name
        role
        retailerCompanyID
        supplierCompanyID
        chatGroup {
          items {
            id
            userID
            chatGroupID
            lastOnline
            createdAt
            updatedAt
          }
          nextToken
        }
        contactNumber
        retailerCompany {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          registrationNumber
          favouriteStores {
            id
            name
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        supplierCompany {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          bankAccount {
            bankName
            accountNumber
          }
          registrationNumber
          listings {
            nextToken
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatGroupUsers = /* GraphQL */ `
  mutation DeleteChatGroupUsers(
    $input: DeleteChatGroupUsersInput!
    $condition: ModelChatGroupUsersConditionInput
  ) {
    deleteChatGroupUsers(input: $input, condition: $condition) {
      id
      userID
      chatGroupID
      lastOnline
      chatGroup {
        id
        name
        retailerID
        retailerCompany {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          registrationNumber
          favouriteStores {
            id
            name
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        supplierID
        supplierCompany {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          bankAccount {
            bankName
            accountNumber
          }
          registrationNumber
          listings {
            nextToken
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        chatParticipants {
          items {
            id
            userID
            chatGroupID
            lastOnline
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            chatGroupID
            type
            content
            senderID
            sender
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
        createdAt
        mostRecentMessage
        mostRecentMessageSender
      }
      user {
        id
        name
        role
        retailerCompanyID
        supplierCompanyID
        chatGroup {
          items {
            id
            userID
            chatGroupID
            lastOnline
            createdAt
            updatedAt
          }
          nextToken
        }
        contactNumber
        retailerCompany {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          registrationNumber
          favouriteStores {
            id
            name
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        supplierCompany {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          bankAccount {
            bankName
            accountNumber
          }
          registrationNumber
          listings {
            nextToken
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProductListing = /* GraphQL */ `
  mutation CreateProductListing(
    $input: CreateProductListingInput!
    $condition: ModelProductListingConditionInput
  ) {
    createProductListing(input: $input, condition: $condition) {
      id
      supplier {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      productName
      variety
      quantityAvailable
      lowPrice
      highPrice
      minimumQuantity
      productPicture
      grade
      siUnit
      createdAt
      updatedAt
    }
  }
`;
export const updateProductListing = /* GraphQL */ `
  mutation UpdateProductListing(
    $input: UpdateProductListingInput!
    $condition: ModelProductListingConditionInput
  ) {
    updateProductListing(input: $input, condition: $condition) {
      id
      supplier {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      productName
      variety
      quantityAvailable
      lowPrice
      highPrice
      minimumQuantity
      productPicture
      grade
      siUnit
      createdAt
      updatedAt
    }
  }
`;
export const deleteProductListing = /* GraphQL */ `
  mutation DeleteProductListing(
    $input: DeleteProductListingInput!
    $condition: ModelProductListingConditionInput
  ) {
    deleteProductListing(input: $input, condition: $condition) {
      id
      supplier {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      productName
      variety
      quantityAvailable
      lowPrice
      highPrice
      minimumQuantity
      productPicture
      grade
      siUnit
      createdAt
      updatedAt
    }
  }
`;
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
      id
      purchaseOrderID
      name
      quantity
      createdAt
      siUnit
      variety
      grade
      updatedAt
    }
  }
`;
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
      id
      purchaseOrderID
      name
      quantity
      createdAt
      siUnit
      variety
      grade
      updatedAt
    }
  }
`;
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
      id
      purchaseOrderID
      name
      quantity
      createdAt
      siUnit
      variety
      grade
      updatedAt
    }
  }
`;
export const createOrderQuotation = /* GraphQL */ `
  mutation CreateOrderQuotation(
    $input: CreateOrderQuotationInput!
    $condition: ModelOrderQuotationConditionInput
  ) {
    createOrderQuotation(input: $input, condition: $condition) {
      id
      items {
        name
        quantity
        siUnit
        variety
        grade
        price
      }
      sum
      logisticsProvided
      paymentTerms
      createdAt
      updatedAt
    }
  }
`;
export const updateOrderQuotation = /* GraphQL */ `
  mutation UpdateOrderQuotation(
    $input: UpdateOrderQuotationInput!
    $condition: ModelOrderQuotationConditionInput
  ) {
    updateOrderQuotation(input: $input, condition: $condition) {
      id
      items {
        name
        quantity
        siUnit
        variety
        grade
        price
      }
      sum
      logisticsProvided
      paymentTerms
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrderQuotation = /* GraphQL */ `
  mutation DeleteOrderQuotation(
    $input: DeleteOrderQuotationInput!
    $condition: ModelOrderQuotationConditionInput
  ) {
    deleteOrderQuotation(input: $input, condition: $condition) {
      id
      items {
        name
        quantity
        siUnit
        variety
        grade
        price
      }
      sum
      logisticsProvided
      paymentTerms
      createdAt
      updatedAt
    }
  }
`;
export const createGoodsTask = /* GraphQL */ `
  mutation CreateGoodsTask(
    $input: CreateGoodsTaskInput!
    $condition: ModelGoodsTaskConditionInput
  ) {
    createGoodsTask(input: $input, condition: $condition) {
      id
      retailer {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      retailerID
      supplier {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      items {
        name
        quantity
        siUnit
        variety
        grade
        price
      }
      createdAt
      deliveryDate
      updatedAt
    }
  }
`;
export const updateGoodsTask = /* GraphQL */ `
  mutation UpdateGoodsTask(
    $input: UpdateGoodsTaskInput!
    $condition: ModelGoodsTaskConditionInput
  ) {
    updateGoodsTask(input: $input, condition: $condition) {
      id
      retailer {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      retailerID
      supplier {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      items {
        name
        quantity
        siUnit
        variety
        grade
        price
      }
      createdAt
      deliveryDate
      updatedAt
    }
  }
`;
export const deleteGoodsTask = /* GraphQL */ `
  mutation DeleteGoodsTask(
    $input: DeleteGoodsTaskInput!
    $condition: ModelGoodsTaskConditionInput
  ) {
    deleteGoodsTask(input: $input, condition: $condition) {
      id
      retailer {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      retailerID
      supplier {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      items {
        name
        quantity
        siUnit
        variety
        grade
        price
      }
      createdAt
      deliveryDate
      updatedAt
    }
  }
`;
export const createPaymentTask = /* GraphQL */ `
  mutation CreatePaymentTask(
    $input: CreatePaymentTaskInput!
    $condition: ModelPaymentTaskConditionInput
  ) {
    createPaymentTask(input: $input, condition: $condition) {
      id
      retailer {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      retailerID
      supplier {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      paid
      amount
      payBefore
      receipt
      createdAt
      invoiceID
      invoice {
        id
        retailer {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          registrationNumber
          favouriteStores {
            id
            name
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        retailerID
        supplier {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          bankAccount {
            bankName
            accountNumber
          }
          registrationNumber
          listings {
            nextToken
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        supplierID
        items {
          name
          quantity
          siUnit
          variety
          grade
          price
        }
        createdAt
        paid
        receivedBy
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updatePaymentTask = /* GraphQL */ `
  mutation UpdatePaymentTask(
    $input: UpdatePaymentTaskInput!
    $condition: ModelPaymentTaskConditionInput
  ) {
    updatePaymentTask(input: $input, condition: $condition) {
      id
      retailer {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      retailerID
      supplier {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      paid
      amount
      payBefore
      receipt
      createdAt
      invoiceID
      invoice {
        id
        retailer {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          registrationNumber
          favouriteStores {
            id
            name
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        retailerID
        supplier {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          bankAccount {
            bankName
            accountNumber
          }
          registrationNumber
          listings {
            nextToken
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        supplierID
        items {
          name
          quantity
          siUnit
          variety
          grade
          price
        }
        createdAt
        paid
        receivedBy
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deletePaymentTask = /* GraphQL */ `
  mutation DeletePaymentTask(
    $input: DeletePaymentTaskInput!
    $condition: ModelPaymentTaskConditionInput
  ) {
    deletePaymentTask(input: $input, condition: $condition) {
      id
      retailer {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      retailerID
      supplier {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      paid
      amount
      payBefore
      receipt
      createdAt
      invoiceID
      invoice {
        id
        retailer {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          registrationNumber
          favouriteStores {
            id
            name
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        retailerID
        supplier {
          id
          name
          employees {
            nextToken
          }
          type
          address
          rating {
            numberOfRatings
            CurrentRating
          }
          bankAccount {
            bankName
            accountNumber
          }
          registrationNumber
          listings {
            nextToken
          }
          goodsTask {
            nextToken
          }
          paymentTask {
            nextToken
          }
          invoice {
            nextToken
          }
          chatGroups {
            nextToken
          }
          verified
          logo
          createdAt
          updatedAt
        }
        supplierID
        items {
          name
          quantity
          siUnit
          variety
          grade
          price
        }
        createdAt
        paid
        receivedBy
        updatedAt
      }
      updatedAt
    }
  }
`;
export const createInvoice = /* GraphQL */ `
  mutation CreateInvoice(
    $input: CreateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    createInvoice(input: $input, condition: $condition) {
      id
      retailer {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      retailerID
      supplier {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      items {
        name
        quantity
        siUnit
        variety
        grade
        price
      }
      createdAt
      paid
      receivedBy
      updatedAt
    }
  }
`;
export const updateInvoice = /* GraphQL */ `
  mutation UpdateInvoice(
    $input: UpdateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    updateInvoice(input: $input, condition: $condition) {
      id
      retailer {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      retailerID
      supplier {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      items {
        name
        quantity
        siUnit
        variety
        grade
        price
      }
      createdAt
      paid
      receivedBy
      updatedAt
    }
  }
`;
export const deleteInvoice = /* GraphQL */ `
  mutation DeleteInvoice(
    $input: DeleteInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    deleteInvoice(input: $input, condition: $condition) {
      id
      retailer {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        registrationNumber
        favouriteStores {
          id
          name
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      retailerID
      supplier {
        id
        name
        employees {
          items {
            id
            name
            role
            retailerCompanyID
            supplierCompanyID
            contactNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        type
        address
        rating {
          numberOfRatings
          CurrentRating
        }
        bankAccount {
          bankName
          accountNumber
        }
        registrationNumber
        listings {
          items {
            id
            supplierID
            productName
            variety
            quantityAvailable
            lowPrice
            highPrice
            minimumQuantity
            productPicture
            grade
            siUnit
            createdAt
            updatedAt
          }
          nextToken
        }
        goodsTask {
          items {
            id
            retailerID
            supplierID
            createdAt
            deliveryDate
            updatedAt
          }
          nextToken
        }
        paymentTask {
          items {
            id
            retailerID
            supplierID
            paid
            amount
            payBefore
            receipt
            createdAt
            invoiceID
            updatedAt
          }
          nextToken
        }
        invoice {
          items {
            id
            retailerID
            supplierID
            createdAt
            paid
            receivedBy
            updatedAt
          }
          nextToken
        }
        chatGroups {
          items {
            id
            name
            retailerID
            supplierID
            updatedAt
            createdAt
            mostRecentMessage
            mostRecentMessageSender
          }
          nextToken
        }
        verified
        logo
        createdAt
        updatedAt
      }
      supplierID
      items {
        name
        quantity
        siUnit
        variety
        grade
        price
      }
      createdAt
      paid
      receivedBy
      updatedAt
    }
  }
`;
