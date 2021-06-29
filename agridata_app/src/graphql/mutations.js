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
export const createChatGroup = /* GraphQL */ `
  mutation CreateChatGroup(
    $input: CreateChatGroupInput!
    $condition: ModelChatGroupConditionInput
  ) {
    createChatGroup(input: $input, condition: $condition) {
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
export const updateChatGroup = /* GraphQL */ `
  mutation UpdateChatGroup(
    $input: UpdateChatGroupInput!
    $condition: ModelChatGroupConditionInput
  ) {
    updateChatGroup(input: $input, condition: $condition) {
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
export const deleteChatGroup = /* GraphQL */ `
  mutation DeleteChatGroup(
    $input: DeleteChatGroupInput!
    $condition: ModelChatGroupConditionInput
  ) {
    deleteChatGroup(input: $input, condition: $condition) {
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
      uniqueContentID
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
      uniqueContentID
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
      uniqueContentID
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
export const createPurchaseOrder = /* GraphQL */ `
  mutation CreatePurchaseOrder(
    $input: CreatePurchaseOrderInput!
    $condition: ModelPurchaseOrderConditionInput
  ) {
    createPurchaseOrder(input: $input, condition: $condition) {
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
export const updatePurchaseOrder = /* GraphQL */ `
  mutation UpdatePurchaseOrder(
    $input: UpdatePurchaseOrderInput!
    $condition: ModelPurchaseOrderConditionInput
  ) {
    updatePurchaseOrder(input: $input, condition: $condition) {
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
export const deletePurchaseOrder = /* GraphQL */ `
  mutation DeletePurchaseOrder(
    $input: DeletePurchaseOrderInput!
    $condition: ModelPurchaseOrderConditionInput
  ) {
    deletePurchaseOrder(input: $input, condition: $condition) {
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
        price
      }
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
        price
      }
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
        price
      }
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
