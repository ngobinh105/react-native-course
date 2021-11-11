import React from 'react'
import { View, Image } from 'react-native'
import Text from './Text'

const styles = {
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 45 / 2,
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
  },
  flexContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
  },
  statsContainer: {
    flexGrow: 1,
  },
}

const RepoProfile = (props) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: `${props.ownerAvatarUrl}` }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text fontWeight='bold'>{props.fullName}</Text>
        <Text color='textSecondary' fontWeight='subheading'>
          {props.description}
        </Text>
        <Text>
          <Text
            style={{
              backgroundColor: '#0366d6',
              color: 'white',
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            {props.language}
          </Text>
        </Text>
      </View>
    </View>
  )
}
const Stats = (props) => {
  const roundUpNum = (num) => {
    const decimalNum = Math.round((num / 1000) * 100) / 100
    return decimalNum.toFixed(1)
  }
  return (
    <View style={styles.flexContainer}>
      <View style={styles.statsContainer}>
        <Text fontWeight='bold'>
          {props.stargazersCount > 999
            ? `${roundUpNum(props.stargazersCount)}k`
            : props.stargazersCount}
        </Text>
        <Text color='textSecondary' fontWeight='subheading'>
          Stars
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <Text fontWeight='bold'>
          {props.forksCount > 999
            ? `${roundUpNum(props.forksCount)}k`
            : props.forksCountCount}
        </Text>
        <Text color='textSecondary' fontWeight='subheading'>
          Forks
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <Text fontWeight='bold'>
          {props.reviewCount > 999
            ? `${roundUpNum(props.reviewCount)}k`
            : props.reviewCount}
        </Text>
        <Text color='textSecondary' fontWeight='subheading'>
          Reviews
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <Text fontWeight='bold'>
          {props.ratingAverage > 999
            ? `${roundUpNum(props.ratingAverage)}k`
            : props.ratingAverage}
        </Text>
        <Text color='textSecondary' fontWeight='subheading'>
          Rating
        </Text>
      </View>
    </View>
  )
}
const RepositoryItem = (props) => {
  return (
    <View style={styles.item}>
      <RepoProfile
        ownerAvatarUrl={props.ownerAvatarUrl}
        fullName={props.fullName}
        description={props.description}
        language={props.language}
      />
      <Stats
        stargazersCount={props.stargazersCount}
        forksCount={props.forksCount}
        reviewCount={props.reviewCount}
        ratingAverage={props.ratingAverage}
      />
    </View>
  )
}

export default RepositoryItem
