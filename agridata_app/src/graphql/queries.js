/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRetailerCompany = /* GraphQL */ `
  query GetRetailerCompany($id: ID!) {
    getRetailerCompany(id: $id) {
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
export const listRetailerCompanys = /* GraphQL */ `
  query ListRetailerCompanys(
    $filter: ModelRetailerCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRetailerCompanys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSupplierCompany = /* GraphQL */ `
  query GetSupplierCompany($id: ID!) {
    getSupplierCompany(id: $id) {
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
export const listSupplierCompanys = /* GraphQL */ `
  query ListSupplierCompanys(
    $filter: ModelSupplierCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSupplierCompanys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getChatGroup = /* GraphQL */ `
  query GetChatGroup($id: ID!) {
    getChatGroup(id: $id) {
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
export const listChatGroups = /* GraphQL */ `
  query ListChatGroups(
    $filter: ModelChatGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getChatGroupUsers = /* GraphQL */ `
  query GetChatGroupUsers($id: ID!) {
    getChatGroupUsers(id: $id) {
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
export const listChatGroupUserss = /* GraphQL */ `
  query ListChatGroupUserss(
    $filter: ModelChatGroupUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatGroupUserss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        user {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProductListing = /* GraphQL */ `
  query GetProductListing($id: ID!) {
    getProductListing(id: $id) {
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
export const listProductListings = /* GraphQL */ `
  query ListProductListings(
    $filter: ModelProductListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
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
export const listProductss = /* GraphQL */ `
  query ListProductss(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrderQuotation = /* GraphQL */ `
  query GetOrderQuotation($id: ID!) {
    getOrderQuotation(id: $id) {
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
export const listOrderQuotations = /* GraphQL */ `
  query ListOrderQuotations(
    $filter: ModelOrderQuotationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderQuotations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getGoodsTask = /* GraphQL */ `
  query GetGoodsTask($id: ID!) {
    getGoodsTask(id: $id) {
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
export const listGoodsTasks = /* GraphQL */ `
  query ListGoodsTasks(
    $filter: ModelGoodsTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGoodsTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        deliveryDate
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPaymentTask = /* GraphQL */ `
  query GetPaymentTask($id: ID!) {
    getPaymentTask(id: $id) {
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
export const listPaymentTasks = /* GraphQL */ `
  query ListPaymentTasks(
    $filter: ModelPaymentTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInvoice = /* GraphQL */ `
  query GetInvoice($id: ID!) {
    getInvoice(id: $id) {
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
export const listInvoices = /* GraphQL */ `
  query ListInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChatGroupsContainingRetailersByUpdatedAt = /* GraphQL */ `
  query GetChatGroupsContainingRetailersByUpdatedAt(
    $retailerID: ID
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getChatGroupsContainingRetailersByUpdatedAt(
      retailerID: $retailerID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getChatGroupsContainingSuppliersByUpdatedAt = /* GraphQL */ `
  query GetChatGroupsContainingSuppliersByUpdatedAt(
    $supplierID: ID
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getChatGroupsContainingSuppliersByUpdatedAt(
      supplierID: $supplierID
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const messagesInChatByDate = /* GraphQL */ `
  query MessagesInChatByDate(
    $chatGroupID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesInChatByDate(
      chatGroupID: $chatGroupID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const productListingByRetailer = /* GraphQL */ `
  query ProductListingByRetailer(
    $supplierID: ID
    $productName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productListingByRetailer(
      supplierID: $supplierID
      productName: $productName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
  }
`;
export const productListingByNameStartingWithLowestPrice = /* GraphQL */ `
  query ProductListingByNameStartingWithLowestPrice(
    $productName: String
    $lowPrice: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productListingByNameStartingWithLowestPrice(
      productName: $productName
      lowPrice: $lowPrice
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
  }
`;
export const purchaseOrderItems = /* GraphQL */ `
  query PurchaseOrderItems(
    $purchaseOrderID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    purchaseOrderItems(
      purchaseOrderID: $purchaseOrderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const goodsTaskForRetailerByDate = /* GraphQL */ `
  query GoodsTaskForRetailerByDate(
    $retailerID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGoodsTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    goodsTaskForRetailerByDate(
      retailerID: $retailerID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        deliveryDate
        updatedAt
      }
      nextToken
    }
  }
`;
export const goodsTaskForSupplierByDate = /* GraphQL */ `
  query GoodsTaskForSupplierByDate(
    $supplierID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGoodsTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    goodsTaskForSupplierByDate(
      supplierID: $supplierID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        deliveryDate
        updatedAt
      }
      nextToken
    }
  }
`;
export const paymentsTaskForRetailerByDate = /* GraphQL */ `
  query PaymentsTaskForRetailerByDate(
    $retailerID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    paymentsTaskForRetailerByDate(
      retailerID: $retailerID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        updatedAt
      }
      nextToken
    }
  }
`;
export const paymentsTaskForSupplierByDate = /* GraphQL */ `
  query PaymentsTaskForSupplierByDate(
    $supplierID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPaymentTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    paymentsTaskForSupplierByDate(
      supplierID: $supplierID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        updatedAt
      }
      nextToken
    }
  }
`;
export const invoiceForRetailerByDate = /* GraphQL */ `
  query InvoiceForRetailerByDate(
    $retailerID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    invoiceForRetailerByDate(
      retailerID: $retailerID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const invoiceForSupplierByDate = /* GraphQL */ `
  query InvoiceForSupplierByDate(
    $supplierID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    invoiceForSupplierByDate(
      supplierID: $supplierID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
