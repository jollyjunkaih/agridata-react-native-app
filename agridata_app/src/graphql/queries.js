/* eslint-disable */
// this is an auto generated file. This will be overwritten

//List Chat Groups by updatedAt, able to check the user's last online or can use get users (should be a more effiecient query) {need to raise this question to AWS Support}
export const listChatsContainingUser = /* GraphQL */ `
  query ListChatGroupUserss(
    $filter: ModelChatGroupUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatGroupUserss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        chatGroupID
        lastOnline
        chatGroup {
          name
          updatedAt
          mostRecentMessage
        }
      }
      nextToken
    }
  }
`;

//List Messages in Chat Room by createdAt
export const listMessagesInChat = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        content
        senderID
        uniqueContentID
        sender
        createdAt
      }
      nextToken
    }
  }
`;

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
        address {
          street
          town
          postcode
        }
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
        address {
          street
          town
          postcode
        }
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
          nextToken
        }
        contactNumber
        retailerCompany {
          id
          name
          type
          registrationNumber
          createdAt
          updatedAt
        }
        supplierCompany {
          id
          name
          type
          registrationNumber
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
          contactNumber
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      address {
        street
        town
        postcode
      }
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
          nextToken
        }
        type
        address {
          street
          town
          postcode
        }
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
          contactNumber
          createdAt
          updatedAt
        }
        nextToken
      }
      type
      address {
        street
        town
        postcode
      }
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
          nextToken
        }
        type
        address {
          street
          town
          postcode
        }
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
          uniqueContentID
          sender
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
      mostRecentMessage
      createdAt
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
        chatParticipants {
          nextToken
        }
        messages {
          nextToken
        }
        updatedAt
        mostRecentMessage
        createdAt
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
      uniqueContentID
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
        uniqueContentID
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
        chatParticipants {
          nextToken
        }
        messages {
          nextToken
        }
        updatedAt
        mostRecentMessage
        createdAt
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
          registrationNumber
          createdAt
          updatedAt
        }
        supplierCompany {
          id
          name
          type
          registrationNumber
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
          updatedAt
          mostRecentMessage
          createdAt
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
          nextToken
        }
        type
        address {
          street
          town
          postcode
        }
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
          type
          registrationNumber
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPurchaseOrder = /* GraphQL */ `
  query GetPurchaseOrder($id: ID!) {
    getPurchaseOrder(id: $id) {
      id
      items {
        name
        quantity
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPurchaseOrders = /* GraphQL */ `
  query ListPurchaseOrders(
    $filter: ModelPurchaseOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchaseOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items {
          name
          quantity
        }
        createdAt
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
        price
      }
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
          price
        }
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
          nextToken
        }
        type
        address {
          street
          town
          postcode
        }
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
        address {
          street
          town
          postcode
        }
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
        createdAt
        updatedAt
      }
      supplierID
      items {
        name
        quantity
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
          type
          registrationNumber
          createdAt
          updatedAt
        }
        retailerID
        supplier {
          id
          name
          type
          registrationNumber
          createdAt
          updatedAt
        }
        supplierID
        items {
          name
          quantity
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
          nextToken
        }
        type
        address {
          street
          town
          postcode
        }
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
        address {
          street
          town
          postcode
        }
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
          registrationNumber
          createdAt
          updatedAt
        }
        retailerID
        supplier {
          id
          name
          type
          registrationNumber
          createdAt
          updatedAt
        }
        supplierID
        items {
          name
          quantity
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
          type
          registrationNumber
          createdAt
          updatedAt
        }
        retailerID
        supplier {
          id
          name
          type
          registrationNumber
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
          nextToken
        }
        type
        address {
          street
          town
          postcode
        }
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
        address {
          street
          town
          postcode
        }
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
        createdAt
        updatedAt
      }
      supplierID
      items {
        name
        quantity
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
          type
          registrationNumber
          createdAt
          updatedAt
        }
        retailerID
        supplier {
          id
          name
          type
          registrationNumber
          createdAt
          updatedAt
        }
        supplierID
        items {
          name
          quantity
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
