import { gql, request } from "graphql-request";

const MASTER_URL =
  "https://ap-south-1.cdn.hygraph.com/content/clzh1pezx06pe07w6ll5xslvv/master";

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessList = async () => {
  const query = gql`
    query BusinessList {
      businessLists {
        about

        category {
          name
        }
        carName
        price
        images {
          url
        }
        id
        name
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessByCategory = async (category) => {
  const query =
    gql`
    query getBusinessCategory {
      businessLists(where: { category: { name: "` +
    category +
    `"} }) {
        about
        carName
        category {
          name
          id
        }
        images {
          url
        }
        price
        name
        id
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessById = async (id) => {
  const query =
    gql`
    query GetBusinessById {
      businessList(where: { id: "` +
    id +
    `" }) {
        about

        category {
          name
        }
        carName
        price
        id
        name
        images {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const createNewBooking = async (
  businessId,
  date,
  endDate,
  userEmail,
  userName
) => {
  const mutationQuery =
    gql`
    mutation CreateBooking {
      createBooking(
        data: {
          bookingStatus: booked,
          businessList: { connect: { id: "` +
    businessId +
    `" } },
          date: "` +
    date +
    `",
          endDate: "` +
    endDate +
    `",
          userEmail: "` +
    userEmail +
    `",
          userName: "` +
    userName +
    `"
        }
      ) {
        id
      }
        publishManyBookings(to: PUBLISHED) {
          count
       }
    }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

const BusinessBookedSlot = async (businessId, date) => {
  const query =
    gql`
  query BusinessBookedSlot {
  bookings(where: {businessList: {id: "` +
    businessId +
    `"}, date: "` +
    date +
    `"}) {
    date
    endDate
  }
}`;
  const result = await request(MASTER_URL, query);
  return result;
};

const GetUserBookingHistory = async (userEmail) => {
  const query =
    gql`query GetUserBookingHistory {
  bookings(where: {userEmail: "` +
    userEmail +
    `"}
  orderBy: publishedAt_ASC) {
    businessList {
      name
      images {
        url
      }
      carName
      price
    }
    date
    endDate
  }
}`;

  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getCategory,
  getBusinessList,
  getBusinessByCategory,
  getBusinessById,
  createNewBooking,
  BusinessBookedSlot,
  GetUserBookingHistory,
};
