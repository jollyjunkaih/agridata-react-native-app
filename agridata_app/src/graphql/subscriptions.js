/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
          nextToken
        }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
          nextToken
        }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
          nextToken
        }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
export const onCreateRetailerCompany = /* GraphQL */ `
  subscription OnCreateRetailerCompany {
    onCreateRetailerCompany {
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
                mostRecentMessage
                mostRecentMessageSender
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
        nextToken
      }
      paymentTask {
        items {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
              chatGroups {
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
              chatGroups {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
                mostRecentMessage
                mostRecentMessageSender
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
          mostRecentMessageSender
          createdAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRetailerCompany = /* GraphQL */ `
  subscription OnUpdateRetailerCompany {
    onUpdateRetailerCompany {
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
                mostRecentMessage
                mostRecentMessageSender
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
        nextToken
      }
      paymentTask {
        items {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
              chatGroups {
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
              chatGroups {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
                mostRecentMessage
                mostRecentMessageSender
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
          mostRecentMessageSender
          createdAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRetailerCompany = /* GraphQL */ `
  subscription OnDeleteRetailerCompany {
    onDeleteRetailerCompany {
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
                mostRecentMessage
                mostRecentMessageSender
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
        nextToken
      }
      paymentTask {
        items {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
              chatGroups {
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
              chatGroups {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
                mostRecentMessage
                mostRecentMessageSender
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
          mostRecentMessageSender
          createdAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSupplierCompany = /* GraphQL */ `
  subscription OnCreateSupplierCompany {
    onCreateSupplierCompany {
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
                mostRecentMessage
                mostRecentMessageSender
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
        nextToken
      }
      goodsTask {
        items {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
        nextToken
      }
      paymentTask {
        items {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
              chatGroups {
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
              chatGroups {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
                mostRecentMessage
                mostRecentMessageSender
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
          mostRecentMessageSender
          createdAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSupplierCompany = /* GraphQL */ `
  subscription OnUpdateSupplierCompany {
    onUpdateSupplierCompany {
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
                mostRecentMessage
                mostRecentMessageSender
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
        nextToken
      }
      goodsTask {
        items {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
        nextToken
      }
      paymentTask {
        items {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
              chatGroups {
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
              chatGroups {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
                mostRecentMessage
                mostRecentMessageSender
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
          mostRecentMessageSender
          createdAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSupplierCompany = /* GraphQL */ `
  subscription OnDeleteSupplierCompany {
    onDeleteSupplierCompany {
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
                mostRecentMessage
                mostRecentMessageSender
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
        nextToken
      }
      goodsTask {
        items {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
        nextToken
      }
      paymentTask {
        items {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
              chatGroups {
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
              chatGroups {
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
            chatGroups {
              items {
                id
                name
                retailerID
                supplierID
                updatedAt
                mostRecentMessage
                mostRecentMessageSender
                createdAt
              }
              nextToken
            }
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
                mostRecentMessage
                mostRecentMessageSender
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
          mostRecentMessageSender
          createdAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatGroup = /* GraphQL */ `
  subscription OnCreateChatGroup {
    onCreateChatGroup {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
          nextToken
        }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
          nextToken
        }
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
      mostRecentMessageSender
      createdAt
    }
  }
`;
export const onUpdateChatGroup = /* GraphQL */ `
  subscription OnUpdateChatGroup {
    onUpdateChatGroup {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
          nextToken
        }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
          nextToken
        }
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
      mostRecentMessageSender
      createdAt
    }
  }
`;
export const onDeleteChatGroup = /* GraphQL */ `
  subscription OnDeleteChatGroup {
    onDeleteChatGroup {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
          nextToken
        }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
          nextToken
        }
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
      mostRecentMessageSender
      createdAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateChatGroupUsers = /* GraphQL */ `
  subscription OnCreateChatGroupUsers {
    onCreateChatGroupUsers {
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
            nextToken
          }
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
          goodsTask {
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
            nextToken
          }
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
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
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
        mostRecentMessageSender
        createdAt
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
            chatGroup {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
            nextToken
          }
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
          goodsTask {
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
            nextToken
          }
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
export const onUpdateChatGroupUsers = /* GraphQL */ `
  subscription OnUpdateChatGroupUsers {
    onUpdateChatGroupUsers {
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
            nextToken
          }
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
          goodsTask {
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
            nextToken
          }
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
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
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
        mostRecentMessageSender
        createdAt
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
            chatGroup {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
            nextToken
          }
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
          goodsTask {
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
            nextToken
          }
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
export const onDeleteChatGroupUsers = /* GraphQL */ `
  subscription OnDeleteChatGroupUsers {
    onDeleteChatGroupUsers {
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
            nextToken
          }
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
          goodsTask {
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
            nextToken
          }
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
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
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
        mostRecentMessageSender
        createdAt
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
            chatGroup {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
            nextToken
          }
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
          goodsTask {
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
            nextToken
          }
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
export const onCreateProductListing = /* GraphQL */ `
  subscription OnCreateProductListing {
    onCreateProductListing {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
export const onUpdateProductListing = /* GraphQL */ `
  subscription OnUpdateProductListing {
    onUpdateProductListing {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
export const onDeleteProductListing = /* GraphQL */ `
  subscription OnDeleteProductListing {
    onDeleteProductListing {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
export const onCreatePurchaseOrder = /* GraphQL */ `
  subscription OnCreatePurchaseOrder {
    onCreatePurchaseOrder {
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
export const onUpdatePurchaseOrder = /* GraphQL */ `
  subscription OnUpdatePurchaseOrder {
    onUpdatePurchaseOrder {
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
export const onDeletePurchaseOrder = /* GraphQL */ `
  subscription OnDeletePurchaseOrder {
    onDeletePurchaseOrder {
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
export const onCreateOrderQuotation = /* GraphQL */ `
  subscription OnCreateOrderQuotation {
    onCreateOrderQuotation {
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
export const onUpdateOrderQuotation = /* GraphQL */ `
  subscription OnUpdateOrderQuotation {
    onUpdateOrderQuotation {
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
export const onDeleteOrderQuotation = /* GraphQL */ `
  subscription OnDeleteOrderQuotation {
    onDeleteOrderQuotation {
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
export const onCreateGoodsTask = /* GraphQL */ `
  subscription OnCreateGoodsTask {
    onCreateGoodsTask {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
export const onUpdateGoodsTask = /* GraphQL */ `
  subscription OnUpdateGoodsTask {
    onUpdateGoodsTask {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
export const onDeleteGoodsTask = /* GraphQL */ `
  subscription OnDeleteGoodsTask {
    onDeleteGoodsTask {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
export const onCreatePaymentTask = /* GraphQL */ `
  subscription OnCreatePaymentTask {
    onCreatePaymentTask {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
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
          goodsTask {
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
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
      updatedAt
    }
  }
`;
export const onUpdatePaymentTask = /* GraphQL */ `
  subscription OnUpdatePaymentTask {
    onUpdatePaymentTask {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
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
          goodsTask {
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
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
      updatedAt
    }
  }
`;
export const onDeletePaymentTask = /* GraphQL */ `
  subscription OnDeletePaymentTask {
    onDeletePaymentTask {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
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
          goodsTask {
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
          paymentTask {
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
          invoice {
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
          chatGroups {
            items {
              id
              name
              retailerID
              retailerCompany {
                id
                name
                type
                registrationNumber
                createdAt
                updatedAt
              }
              supplierID
              supplierCompany {
                id
                name
                type
                registrationNumber
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
              mostRecentMessage
              mostRecentMessageSender
              createdAt
            }
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
      updatedAt
    }
  }
`;
export const onCreateInvoice = /* GraphQL */ `
  subscription OnCreateInvoice {
    onCreateInvoice {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
export const onUpdateInvoice = /* GraphQL */ `
  subscription OnUpdateInvoice {
    onUpdateInvoice {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
export const onDeleteInvoice = /* GraphQL */ `
  subscription OnDeleteInvoice {
    onDeleteInvoice {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
              createdAt
              updatedAt
            }
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
              chatGroups {
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
          nextToken
        }
        goodsTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        paymentTask {
          items {
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
              chatGroups {
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
              chatGroups {
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
          nextToken
        }
        invoice {
          items {
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
              chatGroups {
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
              chatGroups {
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
              chatGroups {
                nextToken
              }
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
              chatGroups {
                nextToken
              }
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
                uniqueContentID
                sender
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
            mostRecentMessage
            mostRecentMessageSender
            createdAt
          }
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
